/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const fse = require('fs-extra');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    sourcemaps: {
      enabled: EmberApp.env() !== 'production',
      extensions: ['js']
    },
    lessOptions: {
      paths: [
        'bower_components/semantic-ui'
      ]
    },

    //TODO: these are broken in semantic-ui 2.0.1, change values in config/environment too
    SemanticUI: {
      // These flags allow you do turn on or off auto imports for Semantic UI
      import: {
        css: false,
        javascript: true,
        images: false,
        fonts: true
      }
    },
    'ember-cli-babel': {
      includePolyfill: true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  try {
    fse.copySync('./app/styles/theme.config', './bower_components/semantic-ui/src/theme.config');
    console.log('Successfully copied `./app/styles/theme.config` to `./bower_components/semantic-ui/src/theme.config`'); // eslint-disable-line no-console
  } catch (err) {
    console.error('Failed to copy app/styles/theme.config: ', err); // eslint-disable-line no-console
    process.exit();
  }

  return app.toTree();
};
