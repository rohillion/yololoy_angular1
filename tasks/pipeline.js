/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files, and the ! prefix for excluding files.)
 */

// Path to public folder
var tmpPath = '.tmp/public/';

// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'styles/semantic.min.css',
  'bower_components/angular-datepicker/dist/angular-datepicker.min.css',
  'styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // Load sails.io before everything else
  'js/dependencies/sails.io.js',
  'bower_components/lodash/lodash.min.js',
  //'bower_components/sails.io.js/dist/sails.io.js',

  // Dependencies like jQuery, or Angular are brought in here
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/angular/angular.min.js',
  'bower_components/angular-resource/angular-resource.min.js',
  'bower_components/angular-route/angular-route.min.js',
  'bower_components/angular-sanitize/angular-sanitize.min.js',
  //'bower_components/angular-moment/angular-moment.min.js',
  'bower_components/moment/min/moment.min.js',
  'bower_components/angular-sails/dist/angular-sails.js',
  'bower_components/angular-simple-logger/dist/angular-simple-logger.min.js',
  'bower_components/angular-google-maps/dist/angular-google-maps.min.js',
  'bower_components/ng-inline-edit/dist/ng-inline-edit.js',
  'bower_components/angular-datepicker/dist/angular-datepicker.js',
  'js/dependencies/**/*.js',

  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/app.js',
  'js/services/*.js',
  'js/filters/*.js',
  'js/controllers/MainMenuCtrl.js',
  'js/controllers/*.js',
  'js/**/*.js',

  // Use the "exclude" operator to ignore files
  // '!js/ignore/these/files/*.js'
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(transformPath);
module.exports.jsFilesToInject = jsFilesToInject.map(transformPath);
module.exports.templateFilesToInject = templateFilesToInject.map(transformPath);

// Transform paths relative to the "assets" folder to be relative to the public
// folder, preserving "exclude" operators.
function transformPath(path) {
  return (path.substring(0,1) == '!') ? ('!' + tmpPath + path.substring(1)) : (tmpPath + path);
}
