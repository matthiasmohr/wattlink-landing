import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import * as Sentry from "@sentry/angular";
import {environment} from "./environments/environment";
import {enableProdMode} from "@angular/core";

if (environment.production) {
  enableProdMode();
}

Sentry.init({
  dsn: "https://67d156ae03867ad71e8eb033ea8d917d@o4508762528612352.ingest.de.sentry.io/4508762571407440",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", "stage.stromify.de", "stromify.de"],
  // Session Replay
  replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
