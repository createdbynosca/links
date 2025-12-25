# Linkpage - Selbst gehosteter Linktree-Klon

Ein einfacher, selbst gehosteter Linktree/Wonderlink-Klon mit Google Sheets als Backend.

## Features

- 📱 Mobile-first Design
- 🎨 Anpassbares lila Farbschema
- 📊 Google Sheets als "Datenbank" für Affiliate-Links
- 🔄 Automatisches Caching (reduziert API-Aufrufe)
- ✏️ Einfache Pflege ohne Code-Kenntnisse

---

## Schnellstart

### 1. Google Sheet erstellen

1. Erstelle ein neues Google Sheet: [sheets.new](https://sheets.new)

2. Benenne das erste Tabellenblatt unten als **"Links"**

3. Erstelle folgende Spalten in Zeile 1:

   | A | B | C | D |
   |---|---|---|---|
   | Kategorie | Titel | URL | Bild-URL |

4. Füge deine Links ab Zeile 2 ein, zum Beispiel:

   | Kategorie | Titel | URL | Bild-URL |
   |-----------|-------|-----|----------|
   | Plotter | Cricut Maker 4 - Starter Paket | https://amzn.to/xxx | https://example.com/cricut.jpg |
   | Plotter | Cricut Joy - Starter Set | https://amzn.to/yyy | https://example.com/joy.jpg |
   | Zubehör | Schneidematte | https://amzn.to/zzz | https://example.com/matte.jpg |

5. Klicke auf **Freigeben** → **Für jeden mit dem Link** → **Betrachter**

6. Kopiere die Sheet-ID aus der URL:
   ```
   https://docs.google.com/spreadsheets/d/DIESE_ID_KOPIEREN/edit
   ```

---

### 2. Google API Key erstellen

1. Gehe zur [Google Cloud Console](https://console.cloud.google.com/)

2. Erstelle ein neues Projekt (oder wähle ein bestehendes)

3. Gehe zu **APIs & Dienste** → **Bibliothek**

4. Suche nach **"Google Sheets API"** und aktiviere sie

5. Gehe zu **APIs & Dienste** → **Anmeldedaten**

6. Klicke auf **+ Anmeldedaten erstellen** → **API-Schlüssel**

7. Klicke auf den erstellten Key → **Schlüssel bearbeiten**

8. Unter **API-Einschränkungen**:
   - Wähle **"Schlüssel einschränken"**
   - Wähle **"Google Sheets API"**
   
9. (Optional aber empfohlen) Unter **Anwendungseinschränkungen**:
   - Wähle **"HTTP-Verweis-URLs"**
   - Füge deine Domain hinzu: `https://deine-domain.de/*`

10. Speichern und den API-Key kopieren

---

### 3. Konfiguration eintragen

Öffne `config.js` und trage deine Daten ein:

```javascript
const CONFIG = {
    GOOGLE_API_KEY: 'AIzaSy...dein-echter-key',
    GOOGLE_SHEET_ID: '1abc...deine-sheet-id',
    SHEET_NAME: 'Links',
    CACHE_DURATION_MINUTES: 5,
    // ...
};
```

---

### 4. Bilder vorbereiten

**Option A: Cloudinary (empfohlen)**

1. Erstelle einen kostenlosen Account bei [cloudinary.com](https://cloudinary.com)
2. Lade Produktbilder hoch
3. Kopiere die URLs ins Google Sheet (Spalte D)

**Option B: Bilder im Projekt**

1. Lege Bilder in den `images/` Ordner
2. Trage relative Pfade ins Sheet ein: `images/cricut.jpg`

**Option C: Externe URLs**

Verwende direkt Bild-URLs von anderen Quellen (z.B. Hersteller-Websites).

---

### 5. Deployment auf Netlify

1. Pushe das Projekt zu GitHub

2. Gehe zu [netlify.com](https://netlify.com) und logge dich ein

3. Klicke auf **"Add new site"** → **"Import an existing project"**

4. Wähle dein GitHub Repository

5. Einstellungen:
   - **Build command:** (leer lassen)
   - **Publish directory:** `.` oder `/`
   
6. Klicke auf **"Deploy"**

7. (Optional) Eigene Domain unter **Domain settings** hinzufügen

---

## Dateien anpassen

### Profilbild ändern

Ersetze `images/avatar.png` mit deinem eigenen Bild.

### Farben ändern

In `styles.css` die CSS-Variablen anpassen:

```css
:root {
    --color-bg: #8B5CF6;        /* Hauptfarbe (lila) */
    --color-bg-light: #A78BFA;  /* Hellere Variante */
    --color-bg-dark: #7C3AED;   /* Dunklere Variante */
    --color-accent-yellow: #FBBF24;  /* Akzentfarbe */
}
```

### Texte ändern

In `index.html`:
- Username in `<h1 class="username">`
- Tagline in `<p class="tagline">`
- Shop-URL im ersten `<a href="...">`

---

## Google Sheet pflegen

Die Pflegeperson muss nur das Google Sheet bearbeiten:

1. Öffne das Sheet
2. Neue Zeile hinzufügen für neuen Link
3. Zeile löschen um Link zu entfernen
4. Änderungen sind nach max. 5 Minuten live (Cache)

**Tipp:** Zum sofortigen Update kann der Browser-Cache geleert werden (Strg+Shift+R).

---

## Fehlerbehebung

**Links laden nicht:**
- Prüfe ob das Sheet öffentlich freigegeben ist
- Prüfe ob der API-Key korrekt ist
- Prüfe die Browser-Konsole (F12) auf Fehler

**Bilder werden nicht angezeigt:**
- Prüfe ob die Bild-URLs korrekt sind
- Prüfe ob die Bilder öffentlich zugänglich sind
- CORS-Probleme? Verwende Cloudinary

**"403 Forbidden" Fehler:**
- API-Key ist eingeschränkt auf falsche Domain
- Sheets API nicht aktiviert

---

## Struktur

```
linkpage/
├── index.html          # Hauptseite mit Shop + Affiliate-Button
├── affiliate-links.html # Affiliate-Links Seite
├── styles.css          # Alle Styles
├── config.js           # Konfiguration (API-Key, Sheet-ID)
├── sheets-loader.js    # Lädt Links aus Google Sheets
├── images/
│   ├── avatar.png      # Profilbild
│   ├── shop-preview.jpg    # Vorschaubild Shop-Button
│   ├── tools-preview.jpg   # Vorschaubild Affiliate-Button
│   └── placeholder.svg     # Fallback für fehlende Bilder
└── README.md
```

---

## Lizenz

Frei verwendbar für persönliche und kommerzielle Projekte.
