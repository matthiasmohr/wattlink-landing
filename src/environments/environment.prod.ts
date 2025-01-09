// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  environment: 'prod',
  appVersion: 'v0.1',
  featureToggle: {
    showPhoneChannel: false,
    footerShowServicesSection: false
  },
  links: {
    portal: "https://portal.stromify.de"
  },
  contactAPI: "https://stage.newsletter-registerer.stromify.de"
};
