/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    sourcemaps: {
      enabled: EmberApp.env() !== 'production',
      extensions: ['js']
    },
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap/scss'
      ],
      options: {
        precision: 8
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

  const bootstrapImportPath = 'bower_components/bootstrap/js/dist/';
  app.import(bootstrapImportPath + 'util.js');
  app.import(bootstrapImportPath + 'button.js');
  app.import(bootstrapImportPath + 'collapse.js');
  app.import(bootstrapImportPath + 'dropdown.js');

  return app.toTree();
};
