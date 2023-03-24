# Dokumentation - [Vocabulary Webapplication](https://vocabulary.sanqro.me/)

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
    - [Lokale Entwicklungsumgebung aufsetzen](#lokale-entwicklungsumgebung-aufsetzen)
    - [Vorbereiten](#vorbereitung)
    - [Dependencies mit NPM installieren](#dependencies-mit-npm-installieren)
    - [Lokale Server starten](#lokale-server-starten)
    - [Frontend starten](#frontend-starten)
    - [Optional: Backend starten](#optional:-backend-starten)
  - [Anforderungen](#anforderungen)
  - [Arbeitspakete](#arbeitspakete)
  - [Ausführung](#ausführung)
  - [Testen](#testen)
    - [Testumgebungen](#testumgebungen)
  - [Testfälle](#testfälle)
    - [Testprotokoll](#testprotokoll)
    - [Testbericht](#testbericht)
  - [Projektauswertung](#projektauswertung)

## IPERKA

### Informieren

- [Einleitung](#einleitung)
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

Für dieses Projekt haben wir uns dafür entschieden, dass wir eine kleine Applikation releasieren, bei der man vokabeln in verschiedenen Sprachen lernen kann. Dabei kann man auch eigene Lernsets erstellen, verändern und löschen.

Die Seite ist unter folgender Adresse erreichbar:

[https://vocabulary.sanqro.me/](https://vocabulary.sanqro.me/)

## Technologien

Um unsere Vocabulary Webapplication zu realisieren haben wir uns dazu entschieden die folgenden Technologien zu verwenden:

- [NodeJS](https://nodejjs.org/en/about/)
- [Express](https://expressjs.com/de/)
- [React](https://reactjs.org)
- [TypeScript(tsx)](https://www.typescriptlang.org)
- [Deta](https://www.deta.space/)
- [Github mit Workflows](https://docs.github.com/en/actions/using-workflows)
- [Netlify](https://www.netlify.com/)

## Quellen

- [Deta Dokumenation](https://deta.space/docs/en/introduction/start)

## Lokale Entwicklungsumgebung

### Lokale Entwicklungsumgebung aufsetzen

### Vorbereitung

Für die Realisierung dieses Projekts haben wir Visual Studio Code mit wenigen Erweiterungen, und zwar ESLint, Prettier und Live Share verwendet. Bei der Live Share-Erweiterung haben wir keine speziellen Einstellungen vorgenommen, wobei wir bei den Erweiterungen ESLint und Prettier eine eigene Konfiguration erstellt haben, um unsere eigenen Code-Konventionen zu erzwingen. Diese Einstellungen werden automatisch übernommen, insofern man die beiden Erweiterung installiert hat und die Entwicklungsumgebung aufgesetzt hat.

Um die lokale Entwicklungsumgebung aufzusetzen, muss man sich zuerst eine Kopie vom Repository, von der [offiziellen Quelle](https://github.com/sanqro/vocabulary) holen.

Dies kann man tun, indem man eine eigene Kopie von dem Repository erstellt (forkt), damit man später seine Änderungen auch bei GitHub pushen kann, auch wenn man kein Contributor ist.

_Dadurch kann man auch die eigenen Änderungen im offiziellen Repository eingbringen, indem man eine Pull Request erstellt._

![](assets/fork.png)

Wenn das Repository erfolgreich geforkt wurde, muss man das Repository klonen und in dessen Verzeichnis wechseln.

```shell
git clone https://github.com/[deinBenutzername]/vocabulary.git
cd vocabulary/
```

### Dependencies mit NPM installieren

**_Für diesen Schritt ist es notwendig, die node.js-Runtime installiert zu haben. [Download von node.js](https://nodejs.org/de/)_**

Nachdem man das Projekt geklont hat, sollte man alle Dependencies installieren. Dabei muss man in das entsprechende Verzeichnis wechseln und die Abhängigkeiten installieren.

**Dependencies im Frontend installieren**

```bash
cd client/
npm i
cd ..
```

_Nun sollten alle Dependencies installiert worden sein und es sollte eine Fehlermeldung erscheinen, dass es sechs verheerende Sicherheitslücken gibt. Diese sind jedoch momentan zu vernächlässigen, da es zu diesem Zeitpunkt noch keine Lösung für diese gibt **[Stand: März 2023]**._

**Optional: Dependencies im Backend installieren**

**_Dieser Schritt ist optional, da das Projekt im Frontend ein externes Backend verwendet, welches auf [deta.space ](https://deta.space)gehostet wird_**

```bash
cd server/
npm i
cd ..
```

### Lokale Server starten

### Frontend starten

Damit das Frontend lokal auf **localhost:3000** gestartet wird, muss der folgende Befehl in dem Verzeichnis des Frontends (client/) ausgeführt werden.

```bash
npm run start
```

### Optional: Backend starten

_Dieser Schritt ist optional, da das Projekt im Frontend ein externes Backend verwendet, welches auf [deta.space ](https://deta.space)gehostet wird_

_Damit das Backend ordnungsgemäss funktioniert müssen noch Umgebungsvariabelen angelegt werden, dafür muss man eine Datei im server/src Verzeichnis mit dem Namen .env anlegen_

**DETA_PROJECT_KEY:** Projektschlüssel von Deta.space.

**\JWT_Secret**: Zufällige Zeichenkette, je länger desto besser

_Optional: **PORT**: Eine Nummer, beispielsweise 3001, die den Port angibt auf, welchem das Backend gestartet wird._

Damit das Backend lokal auf **localhost:8080** (sofern die PORT-Variabel nicht gesetzt wurde) gestartet wird, muss der folgende Befehl in dem Verzeichnis des Backends (server/) ausgeführt werden.

```bash
npm run dev
```

## Anforderungen

| Anf.-Nr. | Muss/<br />Kann | funk./<br />qual. | Beschreibung                                                                                                                                                                              |
| :------- | :-------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | Muss            | funk.             | Die Webapplikation soll ein Anmeldungsfeld haben.                                                                                                                                         |
| 2        | Muss            | funk.             | Die Webapplikation soll ein Registrierungsfeld haben.                                                                                                                                     |
| 3        | Muss            | funk.             | Die Anmeldung soll funktional sein.                                                                                                                                                       |
| 4        | Muss            | funk.             | Die Registrierung soll funktional sein.                                                                                                                                                   |
| 5        | Muss            | funk.             | Man kann ein eigenes Vokabelset erstellen.                                                                                                                                                |
| 6        | Muss            | funk.             | Man kann das Vokabelset löschen.                                                                                                                                                          |
| 7        | Muss            | funk.             | Man kann die Wörter aus dem Vokabelset bearbeiten.                                                                                                                                        |
| 8        | Muss            | funk.             | Man kann die Wörter aus dem Vokabelset anschauen.                                                                                                                                         |
| 9        | Muss            | funk.             | Es gibt einen Lernmodus, wo man in Sitzungen, welche 10- 15 Wörter beinhalten, Wörter richtig übersetzen muss.                                                                            |
| 10       | Muss            | funk.             | Im Lernmodus soll auf die Gross- und Kleinschreibung geachtet werden von der Eingabe des Benutzers.                                                                                       |
| 11       | Muss            | funk.             | Dem Benutzer soll direkt nach der eingabe des Wortes klar sein, ob das Wort richtig oder falsch eingegeben wurde.                                                                         |
| 12       | Kann            | qual.             | Wenn die Levenshtein-Distanz 1 entspricht soll ein Pop-Up mit dem eingegebenen Wort erscheinen, welches fragt, ob er das Wort richtig eingegeben hat.                                     |
| 13       | Kann            | qual.             | Wenn das Pop-Up mit Nein beantwortet wird kann man das Wort nochmal eingeben und bei Ja wird dir das richtige Wort und eine Meldung, die klar macht, dass das Wort falsch ist, angezeigt. |
| 14       | Kann            | qual.             | Nachdem das Wort mit der Lösung verglichen wurde kann man durch einen Knopf zur nächsten Frage gehen.                                                                                     |
| 15       | Kann            | qual.             | Bei der Eingabe der Wörter kann man auswählen welche Spalte welche Sprache ist.                                                                                                           |
| 16       | Kann            | qual.             | Man kann einstellen in welcher Sprache man antworten will.                                                                                                                                |
| 17       | Muss            | qual.             | Die Passwörter wurden argon2 verschüsselt.                                                                                                                                                |
| 18       | Muss            | funk.             | Die Daten sollen in Deta Datenbank gespeichert werden.                                                                                                                                    |
| 19       | Muss            | funk.             | Die Daten sollen von der Datenbank geholt werden,die gerade für die Sitzung gebraucht werden.                                                                                             |
| 20       | Muss            | funk.             | Wenn man sich einloggt bekommt man vom Backend ein JWT-Token zugewiesen.                                                                                                                  |
| 21       | Muss            | funk.             | Wenn man sich registriert wird ein Benutzer erstellt in der Datenbank erstellt.                                                                                                           |

## Arbeitspakete

> 1x Arbeitspaket = 45 Minuten (eine Schullektion) <br>
> 1x Sitzung = 5x Arbeitspakete (ein Halbtag) <br>
> Arbeitspakete \* Sitzungen \* Gruppenmitglieder
>
> 5 \* 6 \* 2 = 60 Arbeitpakete

| Nr. | Frist      | Beschreibung                                                         | Zeit in Arbeitspaketen (geplant) |
| --- | ---------- | -------------------------------------------------------------------- | :------------------------------- |
| 1   | 03.02.2023 | Informieren (von IPERKA)                                             | 10                               |
| 2   | 24.06.2023 | Planen (von IPERKA)                                                  | 6                                |
| 3   | 24.02.2023 | Entscheiden (von IPERKA)                                             | 4                                |
| 4   | 03.03.2023 | Realisieren (von IPERKA) der Anforderungen Nr. 1 bis 4 und 17 bis 21 | 10                               |
| 5   | 10.03.2023 | Realisieren (von IPERKA) der Anforderungen Nr. 5 bis 10              | 10                               |
| 6   | 17.03.2023 | Realisieren (von IPERKA) der Anforderungen Nr. 10 bis 16             | 10                               |
| 7   | 24.03.2023 | Kontrollieren (von IPERKA)                                           | 6                                |
| 8   | 24.03.2023 | Auswerten (von IPERKA)                                               | 4                                |
| 9   | 31.03.2023 | Portfolioeintrag fertigstellen                                       | 8                                |

## Ausführung

| Nr. | Frist      | Bemerkung                                                                                                                     | Zeit (geplant) | Zeit (effektiv) |
| :-- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------- | --------------- |
| 1   | 03.02.2023 | Hat länger als normal gedauert, aber war noch im Rahmen.                                                                      | 10             | 10              |
| 2   | 24.06.2023 | Wir haben mehr geplant als wir umsetzen können in der Zeit, da wir noch später an dem Projekt arbeiten wollen.                | 6              | 6               |
| 3   | 24.02.2023 | Das Entscheiden ging recht schnell, da es sehr eindeutig war, was wir benutzen wollen.                                        | 4              | 2               |
| 4   | 03.03.2023 | Wir hätten zu der neuen Version von Deta migrieren sollen, wobei es Probleme gab.                                             | 10             | 16              |
| 5   | 10.03.2023 | Einer von uns hat mit Typescript in dem Projekt seine ersten Erfahrungen gemacht, darum ging es am Anfang eher langsam voran. | 10             | 20              |
| 6   | 17.03.2023 | Weil wir mehr geplant haben, haben wir nicht alle Anforderungen geschafft umzusetzen.                                         | 10             | 18              |

### Testumgebungen

Wir verwenden für die verschiedenen Testfälle zwei unterschiedliche Testumgebungen:

#### Selenium:

**Betriebssystem:**

Der Browser, mit dem wir die Tests in der Selenium-IDE ausführen, wird auf der neusten Version von Microsoft 10 (22H2) ausgeführt.

**Browser:**

Für den Browser verwenden wir die neuste Version von Mozilla Firefox (111.01).

**Selenium-IDE:**

Für die Tests mit Selenium verwenden wir die neuste Version der Selenium-IDE für Mozilla Firefox (3.17.4).
Postman:

#### Postman

**Betriebssystem:**

Die Postman-Applikation, mit der wir die Tests der API-Endpoints testen, wird auf der neusten Version von Microsoft 10 (22H2) ausgeführt.

**Postman:**

Die Postman-Applikation verwendet die neuste Version (v10.12).

#### Manuell (Per Hand):

**Betriebssystem:**

Der Browser, mit dem wir die Tests in dem wir die Tests manuell testen, wird auf der neusten Version von Microsoft 10 (22H2) ausgeführt.

**Browser:**

Für den Browser verwenden wir die neuste Version von Mozilla Firefox (111.01).

## Testfälle

| Testf.-Nr. | Anforderung | Vorraussetzung                                                              | Testumgebung | Eingabe                                                                                                                                                                                                                                                                                                                                   | Erw. Ausgabe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :--------: | ----------- | :-------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    1.1     | 1           | Fertige Seite wurde deployed                                                | Selenium     | 1. Diesen Link in der URL eingeben “https://vocabulary.sanqro.me/login ”.                                                                                                                                                                                                                                                                 | 2. Login als Titel und jeweils ein Feld für den Benutzername und das Passwort und einen Login-Knopf.                                                                                                                                                                                                                                                                                                                                                                                        |
|    2.1     | 2           | Fertige Seite wurde deployed                                                | Selenium     | 1. Diesen Link in der URL eingeben “https://vocabulary.sanqro.me/register ”.                                                                                                                                                                                                                                                              | 2. Registration als Titel und jeweils ein Feld für den Benutzername und das Passwort und einen Registration-Knopf.                                                                                                                                                                                                                                                                                                                                                                          |
|    3.1     | 4           | Testfall Nr. 2.1                                                            | Selenium     | 1. Im Benutzernamenfeld [Eigenen Benutzernamen] eingeben und im Passwortfeld [Eigenes Passwort] eingeben.                                                                                                                                                                                                                                 | 2. Ein Pop-up erscheint, in dem steht “You registered successfully as [Eigener Benutzername]”<br /><br />3. Der Session Storage wurde mit einem JWT und dem Benutzername gefüllt.                                                                                                                                                                                                                                                                                                           |
|    3.2     | 4           | Testfall Nr. 2.1                                                            | Selenium     | 1. Im Benutzernamenfeld “RelxOff” eingeben und im Passwortfeld “qwrtzuiop” eingeben.                                                                                                                                                                                                                                                      | 2. Ein Pop-up erscheint, in dem steht “There was an error: This user already exists. Please choose another username!”.                                                                                                                                                                                                                                                                                                                                                                      |
|    3.3     | 4           | Testfall Nr. 2.1                                                            | Selenium     | 1. Im Benutzernamenfeld ”” eingeben und im Passwortfeld "" eingeben.                                                                                                                                                                                                                                                                      | 2. Ein Pop-Up erscheint, in dem steht “Please provide your password and username!”.                                                                                                                                                                                                                                                                                                                                                                                                         |
|    3.4     | 4           | Testfall Nr. 2.1                                                            | Selenium     | 1. Im Benutzernamenfeld “Max” eingeben und im Passwortfeld "" eingeben.                                                                                                                                                                                                                                                                   | 2. Ein Pop-Up erscheint, in dem steht “Please provide your password and username!”.                                                                                                                                                                                                                                                                                                                                                                                                         |
|    3.5     | 4           | Testfall Nr. 2.1                                                            | Selenium     | 1. Im Benutzernamenfeld "" eingeben und im Passwortfeld “Passwort” eingeben.                                                                                                                                                                                                                                                              | 2. Ein Pop-Up erscheint, in dem steht “Please provide your password and username!”.                                                                                                                                                                                                                                                                                                                                                                                                         |
|    4.1     | 3           | Testfall Nr. 1.1 und 3.1                                                    | Selenium     | 1. Im Benutzernamenfeld "[Eigenen Benutzernamen]" eingeben und im Passwortfeld "[Eigenes Passwort]" eingeben.                                                                                                                                                                                                                             | 2. In dem Session Storage ist das richtige JWT und Benutzername.                                                                                                                                                                                                                                                                                                                                                                                                                            |
|    4.2     | 3           | Testfall Nr. 1.1 und 3.1                                                    | Selenium     | 1. Im Benutzernamenfeld “RelxOff” eingeben und im Passwortfeld “qwrtzuiop” eingeben.                                                                                                                                                                                                                                                      | 2. Ein Pop-Up erscheint, in dem steht “Please provide your password and username!”.                                                                                                                                                                                                                                                                                                                                                                                                         |
|    4.3     | 3           | Testfall Nr. 1.1 und 3.1                                                    | Selenium     | 1. Im Benutzernamenfeld "" eingeben und im Passwortfeld "" eingeben.                                                                                                                                                                                                                                                                      | 2. Ein Pop-Up erscheint, in dem steht “Please provide your password and username!”.                                                                                                                                                                                                                                                                                                                                                                                                         |
|    4.4     | 3           | Testfall Nr. 1.1 und 3.1                                                    | Selenium     | 1. Im Benutzernamenfeld “Max” eingeben und im Passwortfeld "" eingeben.                                                                                                                                                                                                                                                                   | 2. Ein Pop-Up erscheint, in dem steht “Please provide your password and username!”.                                                                                                                                                                                                                                                                                                                                                                                                         |
|    4.5     | 3           | Testfall Nr. 1.1 und 3.1                                                    | Selenium     | 1. Im Benutzernamenfeld "" eingeben und im Passwortfeld “Passwort” eingeben.                                                                                                                                                                                                                                                              | 2. Ein Pop-Up erscheint, in dem steht “Please provide your password and username!”.                                                                                                                                                                                                                                                                                                                                                                                                         |
|    5.1     | 5           | Testfall Nr. 4.1                                                            | Selenium     | 1. Diesen Link in der URL eingeben “https://vocabulary.sanqro.me/Create ”<br />3. Im Titeleingabefeld ”[Eigener Titel]” eingeben<br />4. Auf den “Add pair of words” Button klicken.<br /><br />6. In dem Begriffeingabfeld “tree” eingeben und in dem Definitionseingabefeld “Baum”. 7. Auf den “Create vocabulary set” Button klicken.  | 2. Ein Eingabefeld für den Titel und ein Button um ein Wortpaar hinzuzufügen und einer um das Vokabularset zuerstellen.<br />5. Ein Eingabefeld für den Begriff und für die Definition erscheint.<br />8. Es erscheint ein Pop-up, in dem steht “Your Vocabulary has been added successfully”.                                                                                                                                                                                              |
|    5.2     | 5           | Testfall Nr. 4.1                                                            | Selenium     | 1. Diesen Link in der URL eingeben “https://vocabulary.sanqro.me/Create ”<br />3. Im Titeleingabefeld ”” eingeben<br />4. Auf den “Add pair of words” Button klicken.<br /><br />6. In dem Begriffeingabfeld “tree” eingeben und in dem Definitionseingabefeld “Baum”.<br />7. Auf den “Create vocabulary set” Button klicken.            | 2. Ein Eingabefeld für den Titel und ein Button um ein Wortpaar hinzuzufügen und einer um das Vokabularset zuerstellen.<br />5. Ein Eingabefeld für den Begriff und für die Definition erscheint.<br />8. Es erscheint ein Pop-up, in dem steht “The vocabulary doesn’t have a title”.                                                                                                                                                                                                      |
|    5.3     | 5           | Testfall Nr. 4.1                                                            | Selenium     | 1. Diesen Link in der URL eingeben “https://vocabulary.sanqro.me/Create ”<br />3. Im Titeleingabefeld ”” eingeben<br />4. Auf den “Add pair of words” Button klicken.<br /><br />6. In dem Begriffeingabfeld ”” eingeben und in dem Definitionseingabefeld "".<br />7. Auf den “Create vocabulary set” Button klicken.                    | 2. Ein Eingabefeld für den Titel und ein Button um ein Wortpaar hinzuzufügen und einer um das Vokabularset zuerstellen.<br />5. Ein Eingabefeld für den Begriff und für die Definition erscheint.<br />8. Es erscheint ein Pop-up, in dem steht “The vocabulary doesn’t have a title”.                                                                                                                                                                                                      |
|    5.4     | 5           | Testfall Nr. 4.1                                                            | Selenium     | 1. Diesen Link in der URL eingeben “https://vocabulary.sanqro.me/Create ”<br />3. Im Titeleingabefeld ”[Eigener Titel]” eingeben<br />4. Auf den “Add pair of words” Button klicken.<br /><br />6. In dem Begriffeingabfeld “tree” eingeben und in dem Definitionseingabefeld ””.<br />7. Auf den “Create vocabulary set” Button klicken. | 2. Ein Eingabefeld für den Titel und ein Button um ein Wortpaar hinzuzufügen und einer um das Vokabularset zuerstellen.<br />5. Ein Eingabefeld für den Begriff und für die Definition erscheint.<br />8. Es erscheint ein Pop-up, in dem steht “There is a definition which has nothing or a space in it”.                                                                                                                                                                                 |
|    5.5     | 5           | Testfall Nr. 4.1                                                            | Selenium     | 1. Diesen Link in der URL eingeben “https://vocabulary.sanqro.me/Create ”<br />3. Im Titeleingabefeld ”[Eigener Titel]” eingeben<br />4. Auf den “Add pair of words” Button klicken.<br /><br />6. In dem Begriffeingabfeld ”” eingeben und in dem Definitionseingabefeld “Baum”.<br />7. Auf den “Create vocabulary set” Button klicken. | 2. Ein Eingabefeld für den Titel und ein Button um ein Wortpaar hinzuzufügen und einer um das Vokabularset zuerstellen.<br />5. Ein Eingabefeld für den Begriff und für die Definition erscheint.<br />8. Es erscheint ein Pop-up, in dem steht “There is a term which has nothing or a space in it”.                                                                                                                                                                                       |
|    6.1     | 6           | Testfall Nr. 5.1                                                            | Selenium     | 1. Diesen Link in der URL eingeben “https://vocabulary.sanqro.me/Edit ”.<br />3. Auf den “Delete” Button klicken von dem Vokabularset mit dem Titel ”[Eigener Titel]”.                                                                                                                                                                    | 2. Es erscheit ein Block mit dem Titel, Anzahl an Wörter und der Ersteller des Vokabularsets und es erscheint ein “Edit” Button und ein “Delete” Button.<br />4. Es wird das gleiche angezeigt, wie aus Nummer 2 ohne das gelöschte Vokabluarset                                                                                                                                                                                                                                            |
|    7.1     | 7           | Testfall Nr. 5.1                                                            | Selenium     | 1. Diesen Link in der URL eingeben “https://vocabulary.sanqro.me/Edit ”.<br />3. Auf den “Edit” Button klicken von dem Vokabularset mit dem Titel ”[Eigener Titel]”.<br />5. Das Wort “Baum” zu “Hund” ändern.<br />6. Auf den “Save” Button klicken.                                                                                     | 2. Es erscheit ein Block mit dem Titel, Anzahl an Wörter und der Ersteller des Vokabularsets und es erscheint ein “Edit” Button und ein “Delete” Button.<br />4. Es erscheint ein neuer Block der den Titel und die Wörter als Eingabefeld beinhält und der “Edit” und “Delete” Button werden durch eine “Save” und “Cancle” Button ersetzt.<br />7. Es wird das gleiche gezeigt wie in Nummer 2 ausser und der Eintrag, bei dem bearbeiteten Lernset, wurde geändert von “Hund” zu “Baum”. |
|    7.2     | 7           | Testfall Nr. 5.1                                                            | Selenium     | 1. Diesen Link in der URL eingeben “https://vocabulary.sanqro.me/Edit ”.<br />3. Auf den “Edit” Button klicken von dem Vokabularset mit dem Titel ”[Eigener Titel]”.<br />5. Das Wort “Baum” zu “Hund” ändern.<br />6. Auf den “Cancle” Button klicken.                                                                                   | 2. Es erscheit ein Block mit dem Titel, Anzahl an Wörter und der Ersteller des Vokabularsets und es erscheint ein “Edit” Button und ein “Delete” Button.<br />4. Es erscheint ein neuer Block der den Titel und die Wörter als Eingabefeld beinhält und der “Edit” und “Delete” Button werden durch eine “Save” und “Cancle” Button ersetzt.<br />7. Es wird das gleiche gezeigt wie in Nummer 2.                                                                                           |
|    8.1     | 8           | Testfall Nr. 5.1                                                            | Selenium     | 1. Diesen Link in der URL eingeben “https://vocabulary.sanqro.me/View ”.<br />3. Auf den Button “View [Eigenes Lernset]” klicken.                                                                                                                                                                                                         | 2. Man sieht für jedes Vokabularset einen Block, wo der Titel, Ersteller und Anzahl Wörter steht und es gibt einen “View [Eigenes Lernset]” Button.<br />4. Es werden zusätzlich zu den Metadaten alle Wörter angezeigt mit einem “Go home” Button.                                                                                                                                                                                                                                         |
|    9.1     | 9           | Testfall Nr. 5.1                                                            | Selenium     | 1. Diesen Link in der URL eingeben “https://vocabulary.sanqro.me/View ”<br />3. Auf den Button “Lern[Eigenes Lernset]” klicken.                                                                                                                                                                                                           | 2. Man sieht für jedes Vokabularset einen Block, wo der Titel, Ersteller und Anzahl Wörter steht und es gibt einen “Lern[Eigenes Lernset]” Button.<br />4. Es werden alle Metadaten von dem Lernset angezeigt, die Anzahl zu lernenden Wörter für die Session, ein Eingabefeld, ein Wort zum Übersetzen, ein Knopf zum überprüfen des Wortes und einen Button, damit man die Antwort von Begriff zu Definition ändern kann.                                                                 |
|    10.1    | 10          | Testfall Nr. 9.1                                                            | Selenium     | 1. In das Eingabefeld “baum” eingeben und auf den Button “Validate” klicken.                                                                                                                                                                                                                                                              | 2. Es kommt ein Pop-up, wo drin steht, dass die Antwort falsch ist.                                                                                                                                                                                                                                                                                                                                                                                                                         |
|    10.2    | 10          | Testfall Nr. 9.1                                                            | Selenium     | 1. In das Eingabefeld “Baum” eingeben und auf den Button “Validate” klicken.                                                                                                                                                                                                                                                              | 2. Es kommt ein Pop-up, wo drin steht, dass die Antwort richtig ist.                                                                                                                                                                                                                                                                                                                                                                                                                        |
|    11.1    | 11          | Testfall Nr. 9.1                                                            | Selenium     | 1. In das Eingabefeld “sdfsf” eingeben und auf den Button “Validate” klicken.                                                                                                                                                                                                                                                             | 2. Es kommt ein Pop-up, wo drin steht, dass die Antwort falsch ist.                                                                                                                                                                                                                                                                                                                                                                                                                         |
|    11.2    | 11          | Testfall Nr. 9.1                                                            | Selenium     | 1. In das Eingabefeld “Baum” eingeben und auf den Button “Validate” klicken.                                                                                                                                                                                                                                                              | 2. Es kommt ein Pop-up, wo drin steht, dass die Antwort richtig ist.                                                                                                                                                                                                                                                                                                                                                                                                                        |
|    12.1    | 12          | Testfall Nr. 9.1                                                            | Selenium     | 1. In das Eingabefeld “baum” eingeben und auf den Button “Validate” klicken.                                                                                                                                                                                                                                                              | 2. Es erscheint ein Pop-up, in dem steht ob man das Wort richtig geschrieben hat und man kann mit ja oder nein antworten.                                                                                                                                                                                                                                                                                                                                                                   |
|    13.1    | 13          | Testfall Nr. 12.1                                                           | Selenium     | 1. Auf “Ja” klicken.                                                                                                                                                                                                                                                                                                                      | 2. Es erscheint ein Pop-up, in dem steht, dass das eingegebene Wort falsch ist.                                                                                                                                                                                                                                                                                                                                                                                                             |
|    13.2    | 13          | Testfall Nr. 12.1                                                           | Selenium     | 1. Auf “Nein” klicken.                                                                                                                                                                                                                                                                                                                    | 2. Es erscheint das Eingabefeld, in dem man das Wort nochmal eingeben muss.                                                                                                                                                                                                                                                                                                                                                                                                                 |
|    14.1    | 14          | Testfall Nr. 13.1                                                           | Selenium     | 1. Auf “Ok” in dem Pop-up klicken.                                                                                                                                                                                                                                                                                                        | 2. Es wird das nächste Wort angezeigt.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|    15.1    | 15          | Testfall Nr. 5.1 (nur Wörter eingegeben und noch nicht auf “Save” gedrückt) | Selenium     | 2. Irgendeine Sprache auswählen und auf Save drücken.                                                                                                                                                                                                                                                                                     | 1. Über der linken und rechten Spalte gibt es eine Drop-down Liste, mit den unterstützten Sprachen                                                                                                                                                                                                                                                                                                                                                                                          |
|    16.1    | 16          | Testfall Nr. 9.1                                                            | Selenium     | 2. Auf den Button “Answer with Definitons” klicken.                                                                                                                                                                                                                                                                                       | 1. Unter dem “Validate” Button ist ein Knopf wo man von Begriff zu Definition ändern kann.<br />3. Das einzugebene Wort ändert sich von “tree” zu “Baum”.                                                                                                                                                                                                                                                                                                                                   |
|    16.2    | 16          | Testfall Nr. 16.2                                                           | Selenium     | 1. Auf den Button “Answer with Terms” klicken.                                                                                                                                                                                                                                                                                            | 2. Das einzugebene Wort ändert sich von “Baum” zu “tree”.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|    17.1    | 17          | Postman wurde gestartet                                                     | Postman      | 1. Ein POST-Request machen im JSON Format mit folgenden Inhalt:<br />{<br />“username”: “Maxi”,<br />“password”: “MaxiCooli”<br />} .                                                                                                                                                                                                     | 2. In der Datenbank wurde ein Eintrag erstellt.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|    18.1    | 18          | Testfall Nr. 3.1                                                            | Per Hand     | 1. “Ctrl” + “Shift” + “i” drücken und unter “Networking” auf die unterste Request drücken.                                                                                                                                                                                                                                                | 2. In dem “Headers” unter “Response Headers” bei “Server” schauen und dort steht “Deta”.                                                                                                                                                                                                                                                                                                                                                                                                    |
|    19.1    | 19          | Testfall Nr. 9.1                                                            | Per Hand     | 1. “Ctrl” + “Shift” + “i” drücken und unter “Networking” auf die unterste Request drücken, die sollte eine “GET-Request” sein.                                                                                                                                                                                                            | 2. In der “Response” unter “JSON” in dem Array kann man die Daten sehen.                                                                                                                                                                                                                                                                                                                                                                                                                    |
|    20.1    | 20          | Testfall Nr. 3.1                                                            | Per Hand     | 1. “Ctrl” + “Shift” + “i” drücken und unter “Storage” auf die “Session Storage” und dann auf den URL der Webseite klicken.                                                                                                                                                                                                                | 2. Der Value von dem Key “token” ist der JWT.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|    21.1    | 21          | Testfall Nr. 4.1                                                            | Per Hand     | 1. “Ctrl” + “Shift” + “i” drücken und unter “Networking” auf die unterste Request drücken, die sollte eine “POST-Request” sein.                                                                                                                                                                                                           | 2. Man sieht, dass diese Request erfolgreich war an dem Status.                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Testprotokoll

OK = Dieser Testfall wurde erfolgreich getestet.

NOK = Dieses Testfall konnte nicht (erfolgreich) getestet werden.

| Test-Nr | Bericht                                                                      | Tester            |
| :------ | :--------------------------------------------------------------------------- | :---------------- |
| 1.1     | OK                                                                           | @sanqro, @RelxOff |
| 2.1     | OK                                                                           | @sanqro, @RelxOff |
| 3.1     | OK                                                                           | @sanqro, @RelxOff |
| 3.2     | OK                                                                           | @sanqro, @RelxOff |
| 3.3     | OK                                                                           | @sanqro, @RelxOff |
| 3.4     | OK                                                                           | @sanqro, @RelxOff |
| 3.5     | OK                                                                           | @sanqro, @RelxOff |
| 4.1     | OK                                                                           | @sanqro, @RelxOff |
| 4.2     | OK                                                                           | @sanqro, @RelxOff |
| 4.3     | OK                                                                           | @sanqro, @RelxOff |
| 4.4     | OK                                                                           | @sanqro, @RelxOff |
| 4.5     | OK                                                                           | @sanqro, @RelxOff |
| 5.1     | OK                                                                           | @sanqro, @RelxOff |
| 5.2     | OK                                                                           | @sanqro, @RelxOff |
| 5.3     | OK                                                                           | @sanqro, @RelxOff |
| 5.4     | OK                                                                           | @sanqro, @RelxOff |
| 5.5     | OK                                                                           | @sanqro, @RelxOff |
| 6.1     | OK                                                                           | @sanqro, @RelxOff |
| 7.1     | OK                                                                           | @sanqro, @RelxOff |
| 7.2     | OK                                                                           | @sanqro, @RelxOff |
| 8.1     | OK                                                                           | @sanqro, @RelxOff |
| 9.1     | NOK, jedoch funktioniert der Lernmodus aber die Einteilung in 10 - 15 Wörter | @sanqro, @RelxOff |
| 10.1    | OK                                                                           | @sanqro, @RelxOff |
| 10.2    | OK                                                                           | @sanqro, @RelxOff |
| 11.1    | OK                                                                           | @sanqro, @RelxOff |
| 11.2    | OK                                                                           | @sanqro, @RelxOff |
| 12.1    | NOK                                                                          | @sanqro, @RelxOff |
| 13.1    | NOK                                                                          | @sanqro, @RelxOff |
| 13.2    | NOK                                                                          | @sanqro, @RelxOff |
| 14.1    | OK                                                                           | @sanqro, @RelxOff |
| 15.1    | NOK                                                                          | @sanqro, @RelxOff |
| 16.1    | OK                                                                           | @sanqro, @RelxOff |
| 17.1    | OK                                                                           | @sanqro, @RelxOff |
| 18.1    | OK, man kann im Quellecode sehen, wie es verschlüsselt                       | @sanqro, @RelxOff |
| 19.1    | OK                                                                           | @sanqro, @RelxOff |
| 20.1    | OK                                                                           | @sanqro, @RelxOff |
| 21.1    | OK                                                                           | @sanqro, @RelxOff |

### Testbericht

Es müssen noch einige Anforderungen fertig implementiert werden, bevor das Programm abgegeben werden kann.

## Projektauswertung

Am Anfang des Projektes haben wir etwas länger für das Informieren gebraucht, aber wir waren noch im Rahmen der geplanten Zeit. Für einen aus unserer Gruppe war Typescript neu, darum hat es am Anfang etwas länger gebraucht, aber als er einam das Grundprinzip verstanden hat ging es gut. Wir haben die Aufgaben so aufgeteilt, dass der Erfahrene zuerst das Backend macht und der Neue macht zuerst das Frontend. Als das Backend fertig war haben wir beide am Frontend gearbeitet und konnten uns so besser austauschen. Das Erstellen von der Dokumentation ging am Anfang sehr gut, da wir wussten was wir haben wollen und mit welcher Technologie, aber am Schluss ging es nicht so gut voran, da wir nicht so gut konzentriert waren und uns viel ablenken lassen habe.
