# Dokumentation - [Vocabulary Webapplication](https://vocabulary1304.netlify.app/)

### Inhaltsverzeichnis

- [Dokumentation - Vocabulary Webapplication](#dokumentation---vocabulary-webapplication)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [IPERKA](#iperka)
    - [Informieren](#informieren)
    - [Planen](#planen)
    - [Entscheiden](#entscheiden)
    - [Realisieren](#realisieren)
    - [Kontrollieren](#kontrollieren)
    - [Auswerten](#auswerten)
  - [Einleitung](#einleitung)
  - [Technologien](#technologien)
  - [Quellen](#quellen)
  - [Lokale Entwicklungsumgebung](#lokale-entwicklungsumgebung)
    - [Füller](#)
  - [Anforderungen](#anforderungen)
  - [Arbeitspakete](#arbeitspakete)
  - [Ausführung](#ausführung)
  - [Testen](#testen)
    - [Testumgebungen](#testumgebungen)
      - [Füller:](#)
  - [Testfälle](#testfälle)
    - [Testprotokoll](#testprotokoll)
    - [Testbericht](#testbericht)
  - [Frontend](#frontend)
    - [Füller](#)
  - [Backend](#backend)
    - [Füller](#)
  - [Projektauswertung](#projektauswertung)

## IPERKA

### Informieren

- [Technologien](#technologien)
- [Quellen](#quellen)
- [Anforderungen](#anforderungen)

### Planen

- [Testfälle](#testfälle)
- [Arbeitspakete](#arbeitspakete)

### Entscheiden

- [Technologien](#technologien)

### Realisieren

- [Ausführung](#ausführung)

### Kontrollieren

- [Testfälle](#testfälle)
- [Tesprotokoll](#testprotokoll)
- [Testbericht](#testbericht)

### Auswerten

- [Projektauswertung](#projektauswertung)

## Einleitung

Die Seite ist unter folgender Adresse erreichbar:

[https://vocabulary1304.netlify.app/](https://vocabulary1304.netlify.app/)

## Technologien

Um unsere Vocabulary Webapplication zu realisieren haben wir uns dazu entschieden die folgenden Technologien zu verwenden:

- [NodeJS](https://nodejjs.org/en/about/)
- [Express](https://expressjs.com/de/)
- [React](https://reactjs.org)
- [TypeScript(tsx)](https://www.typescriptlang.org)
- [Deta](https://www.deta.sh/)
- [Github mit Workflows](https://docs.github.com/en/actions/using-workflows)
- [Netlify](https://www.netlify.com/)

## Quellen

- [Deta Dokumenation](https://deta.space/docs/en/introduction/start)

## Anforderungen


| Anf.-Nr. | Muss/<br />Kann | funk./<br />qual. | Beschreibung                                                                                                                                                                              |
| :--------- | :---------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | Muss            | funk.             | Die Webapplikation soll ein Anmeldungsfeld haben.                                                                                                                                         |
| 2        | Muss            | funk.             | Die Webapplikation soll ein Registrierungsfeld haben.                                                                                                                                     |
| 3        | Muss            | funk.             | Die Anmeldung soll funktional sein.                                                                                                                                                       |
| 4        | Muss            | funk.             | Die Registrierung soll funktional sein.                                                                                                                                                   |
| 5        | Muss            | funk.             | Man kann ein eigenes Vokabelset erstellen.                                                                                                                                                |
| 6        | Muss            | funk.             | Man kann die Wörter aus dem Vokabelset löschen.                                                                                                                                         |
| 7        | Muss            | funk.             | Man kann die Wörter aus dem Vokabelset bearbeiten.                                                                                                                                       |
| 8        | Muss            | funk.             | Man kann die Wörter aus dem Vokabelset anschauen.                                                                                                                                        |
| 9        | Muss            | funk.             | Es gibt einen Lernmodus, wo man in Sitzungen, welche 10- 15 Wörter beinhalten, Wörter richtig übersetzen muss.                                                                         |
| 10       | Muss            | funk.             | Im Lernmodus soll auf die Gross- und Kleinschreibung geachtet werden von der Eingabe des Benutzers.                                                                                       |
| 11       | Muss            | funk.             | Dem Benutzer soll direkt nach der eingabe des Wortes klar sein, ob das Wort richtig oder falsch eingegeben wurde.                                                                         |
| 12       | Kann            | qual.             | Wenn die Levenshtein-Distanz 1 entspricht soll ein Pop-Up mit dem eingegebenen Wort erscheinen, welches fragt, ob er das Wort richtig eingegeben hat.                                     |
| 13       | Kann            | qual.             | Wenn das Pop-Up mit Nein beantwortet wird kann man das Wort nochmal eingeben und bei Ja wird dir das richtige Wort und eine Meldund, die klar macht, dass das Wort falsch ist, angezeigt. |
| 14       | Kann            | qual.             | Nachdem das Wort mit der Lösung verglichen wurde kann man durch einen Knopf zur nächsten Frage gehen.                                                                                   |
| 15       | Kann            | qual.             | Bei der Eingabe der Wörter kann man auswählen welche Spalte welche Sprache ist.                                                                                                         |
| 16       | Kann            | qual.             | Man kann einstellen auf welcher Sprache man antworten will.                                                                                                                               |
| 17       | Muss            | qual.             | Die Passwörter wurden argon2 verschüsselt.                                                                                                                                              |
| 18        | Muss            | funk.             | Die Daten sollen in Deta Datenbank gespeichert werden.                                                                                                                     |
| 19        | Muss            | funk.             | Die Daten sollen von der Datenbank geholt werden,die gerade für die Sitzung gebraucht werden.                                                                                                                     |
| 20        | Muss            | funk.             | Wenn man sich einloggt bekommt man vom Backend ein JWT-Token zugewiesn.                                                                                                                     |
| 21        | Muss            | funk.             | Wenn man sich registriert wird ein Benutzer erstellt in der Datenbank erstellt.                                                                                                                     |

## Arbeitspakete

> 1x Arbeitspaket = 45 Minuten (eine Schullektion)
> 1x Sitzung = 5x Arbeitspakete (ein Halbtag)
> Arbeitspakete * Sitzungen * Gruppenmitglieder
>
> 5 * 6 * 2 = 60 Arbeitpakete


| Nr. | Frist | Beschreibung | Zeit in Arbeitspaketen (geplant) |
| ----- | ------- | -------------- | :--------------------------------- |
| 1   |       |              |                                  |

## Ausführung


| Nr. | Frist | Bemerkung | Zeit (geplant) | Zeit (effektiv) |
| ----- | ------- | ----------- | ---------------- | ----------------- |
| 1   |       |           |                |                 |

## Testen

### Testumgebungen

## Testfälle


| Testf.-Nr. | Anf-Nr. | Vorbereitung | Testumgebung | Eingabe | Erw. Ausgabe |
| :----------: | --------- | :------------- | -------------- | --------- | -------------- |
|    1.1    |         |              |              |         |              |

### Testprotokoll


| Test-Nr | Bericht | Tester |
| :-------- | :-------- | -------- |
| 1.1     |         |        |

### Testbericht

## Projektauswertung
