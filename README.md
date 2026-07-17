# Dr. Schumacher Produktberater – Präsentationsversion

Eine installierbare, responsive Web-App für die interne Produktberatung.

## Funktionen

- Preislistenwahl vor dem Start: UVP oder FH 1–FH 5
- Produktbereiche Fläche, Hände & Haut, Instrumente und Applikation
- Schnellsuche und Wirkspektrum-Filter
- Produktdetailansichten mit Gebindeauswahl
- Favoriten
- Excel-/CSV-Preisimport ausschließlich lokal im Browser
- Direkte Verlinkung zu offiziellen aktuellen Unterlagen von Dr. Schumacher
- Responsive Darstellung auf Smartphone, Tablet und Desktop
- PWA-Grundgerüst

## Lokal starten

```bash
python3 -m http.server 8080
```

Danach `http://localhost:8080` öffnen.

## GitHub + Render

1. Ordner in ein privates GitHub-Repository hochladen.
2. Bei Render eine **Static Site** erstellen.
3. Build Command leer lassen.
4. Publish Directory: `.`
5. Excel-Preislisten niemals ins Repository hochladen. Sie werden über die App lokal importiert.

## Preisdatei

Erwartete Spalten:

- Artikelnummer
- Produktname
- Gebinde
- UVP
- FH 1
- FH 2
- FH 3
- FH 4
- FH 5

Hinweis: Die Produktdaten dieser Präsentationsversion dienen als funktionales UI-Muster. Verbindliche Produktinformationen, Wirksamkeiten und Einwirkzeiten sind stets den aktuell offiziellen Dokumenten zu entnehmen.


## Version 1.2

- Preislistenwahl gilt nur für die aktuelle Browsersitzung und erscheint nach einem Neustart erneut.
- Kundengespräch-Modus verbirgt sämtliche Preise und internen Konditionen.
- Excel-Import unterstützt mehrere Gebinde je Artikelnummer.
- Importprüfung meldet fehlende Artikelnummern, leere Preiszeilen, Dubletten und unbekannte Artikel.

## Neu in Version 1.4

- Geführter Produktberater mit vier einfachen Fragen
- Produktempfehlungen auf Basis der hinterlegten Produkteigenschaften
- Bereich „Zuletzt angesehen“ mit lokalem Verlauf
- Zusätzliche, touchfreundliche Menübereiche
- Keine Cloud-Speicherung der Preislisten oder des Verlaufs

Hinweis: Empfehlungen sind Orientierungshilfen. Verbindlich sind immer die aktuellen offiziellen Produktinformationen und Sicherheitsunterlagen.


## Neu in Version 1.4

- Produktvergleich für bis zu drei Produkte
- Vergleich von Wirkspektrum, Stärken, Gebinden und aktivem Preis
- automatisch erzeugter Formulierungsvorschlag für das Kundengespräch
- Auswahl bleibt lokal auf dem Gerät gespeichert


## Neu in Version 1.5

- Mehrere lokal gespeicherte Merklisten für Kundentermine
- Interne Wettbewerbsorientierung mit möglichen Produktalternativen
- Gesprächsassistent für Kurzvorstellung, Bedarfsermittlung, Preiseinwand und Abschlussfrage
- Alle neuen Daten bleiben lokal im Browser; keine Cloud-Übertragung

Wichtig: Wettbewerbszuordnungen und Gesprächsvorschläge sind interne Orientierungshilfen. Verbindlich sind ausschließlich aktuelle offizielle Produktinformationen, Freigaben und Sicherheitsunterlagen.

## Neu in Version 1.6

- Kundenübersicht aus der aktuell ausgewählten Merkliste
- Felder für Einrichtung, Ansprechpartner und Gesprächsnotiz
- Druckansicht, die im Browser direkt als PDF gespeichert werden kann
- Kundenansicht mit ausgeblendeten Preisen
- Anzeige von Dateiname, Importzeit und Zeilenzahl der zuletzt importierten Preisliste
- lokale JSON-Sicherung des Preisstands
