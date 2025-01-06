# StromifyLanding

## To DO
- Remove "text-color-danger" (used for ToDo Indication)

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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
