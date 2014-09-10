// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'javascripts/lib',
    paths: {
        app: 'app',
        lib: '../../bower_components',
        d3: '../../bower_components/d3/d3',
        c3: '../../bower_components/c3/c3'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app',  'lib/underscore/underscore'], function (app, _) {
  app.init();
});