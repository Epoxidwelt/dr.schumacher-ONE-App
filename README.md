# Dr. Schumacher Produktberater - MVP

Interne, installierbare Web-App ohne eigenen Cloud-Speicher.

## Start

Da Service Worker nur über HTTP/HTTPS funktionieren:

```bash
python3 -m http.server 8080
```

Dann `http://localhost:8080` öffnen.

## Excel-Import

Erste Tabellenzeile:

`Artikelnummer | Produktname | Gebinde | UVP | FH 1 | FH 2 | FH 3 | FH 4 | FH 5`

Die Artikelnummer muss mit der `sku` in `src/app.js` übereinstimmen. Preise werden in `localStorage` des Geräts gespeichert und nicht hochgeladen.

## Aktuelle öffentliche Unterlagen

Katalog, Datenblätter, Produktbilder und Pläne werden über offizielle Schumacher-Links geöffnet. Die App speichert keine Kopien dieser Dokumente.

## Wichtiger Hinweis

Die Produkttexte dieses MVP sind Kurzfassungen für die Navigation. Verbindlich sind ausschließlich die jeweils aktuellen offiziellen Produktinformationen, Sicherheitsdatenblätter und Gebrauchsanweisungen.
