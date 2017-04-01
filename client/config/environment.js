/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'client',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    //TODO: this is temporarily here due to a bug in semantic-ui-ember 2.0.1
    SemanticUI: {
      // These flags allow you do turn on or off auto imports for Semantic UI
      import: {
        css: false,
        javascript: true,
        images: false,
        fonts: true
      },
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.host = 'http://localhost:4000'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'index',
    authorizer: 'authorizer:token'
  };
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: ENV.host + '/auth/token-auth',
    serverTokenRefreshEndpoint: ENV.host + '/auth/token-refresh',
    refreshAccessTokens: true,
    refreshLeeway: 300,
    identificationField: 'identification',
    passwordField: 'password'
  };

  return ENV;
};
