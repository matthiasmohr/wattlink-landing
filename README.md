# StromifyLanding

## To DO
### Prio A

### Prio B
- Remove "text-color-danger" (used for ToDo Indication)

### Prio C
- Header Sticky machen
- Fehler catchen bei Newsletter-Registrierung, Kontakformular

## Folder Structure
  /src
  ├── /app
  │     ├── /core            # Zentrale Dienste, Guards, Interceptor, i18n
  │     ├── /shared          # Wiederverwendbare Komponenten, Direktiven, Pipes
  │     ├── /layouts         # Header, Footer, Shell-Komponenten
  │     ├── /features        # Feature-Komponenten (z. B. Sections der Landing Page)
  │     ├── /pages           # Routenbasierte Seiten (Home, Impressum, etc.)
  │     ├── /assets          # Bilder, Fonts, Icons, Videos, CSS/SCSS
  │     └── app.component.ts # Hauptkomponente
  │
  ├── /environments          # Dev/Prod Umgebungsvariablen
  ├── /styles                # Globale SCSS- und CSS-Dateien
  │     ├── _variables.scss  # Variablen (Farben, Schriftgrößen, usw.)
  │     ├── _mixins.scss     # Mixins (z. B. Media Queries)
  │     ├── _global.scss     # Globale Stile
  │     └── styles.scss      # Hauptstyles, importiert die o.g. Dateien
  │
  ├── index.html             # Einstiegspunkt der App
  └── main.ts                # Startpunkt der Angular-Anwendung
