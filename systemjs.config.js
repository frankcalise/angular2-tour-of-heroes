/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'rxjs':                       'node_modules/rxjs',
    '@angular2-material/core':    'node_modules/@angular2-material/core',
    '@angular2-material/button':  'node_modules/@angular2-material/button',
    '@angular2-material/toolbar': 'node_modules/@angular2-material/toolbar',
    '@angular2-material/card':    'node_modules/@angular2-material/card',
    '@angular2-material/icon':    'node_modules/@angular2-material/icon',
    '@angular2-material/input':   'node_modules/@angular2-material/input',
    '@angular2-material/list':    'node_modules/@angular2-material/list',
    '@angular2-material/radio':    'node_modules/@angular2-material/radio',
    'ng2-translate':              'node_modules/ng2-translate'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    '@angular2-material/core':    { main: 'core.js', defaultExtension: 'js', format: 'cjs' },
    '@angular2-material/button':  { main: 'button.js', defaultExtension: 'js', format: 'cjs' },
    '@angular2-material/toolbar': { main: 'toolbar.js', defaultExtension: 'js', format: 'cjs' },
    '@angular2-material/card':    { main: 'card.js', defaultExtension: 'js', format: 'cjs' },
    '@angular2-material/icon':    { main: 'icon.js', defaultExtension: 'js', format: 'cjs' },
    '@angular2-material/input':   { main: 'input.js', defaultExtension: 'js', format: 'cjs' },
    '@angular2-material/list':    { main: 'list.js', defaultExtension: 'js', format: 'cjs' },
    '@angular2-material/radio':    { main: 'radio.js', defaultExtension: 'js', format: 'cjs' },
    'ng2-translate':    { main: 'ng2-translate.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
