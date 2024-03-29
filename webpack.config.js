var Encore = require("@symfony/webpack-encore");

Encore
  // directory where compiled assets will be stored
  .setOutputPath("public/build/")
  // public path used by the web server to access the output path
  .setPublicPath("/build")
  // only needed for CDN's or sub-directory deploy
  //.setManifestKeyPrefix('build/')

  // will require an extra script tag for runtime.js
  // but, you probably want this, unless you're building a single-page app
  .enableSingleRuntimeChunk()
  .setManifestKeyPrefix("build/")
  /*
   * FEATURE CONFIG
   *
   * Enable & configure other features below. For a full
   * list of features, see:
   * https://symfony.com/doc/current/frontend.html#adding-more-features
   */
  .cleanupOutputBeforeBuild()
  //.enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  // enables hashed filenames (e.g. app.abc123.css)
  .enableVersioning(Encore.isProduction())

  // uncomment if you use TypeScript
  //.enableTypeScriptLoader()

  .addEntry("js/app", "./assets/js/app.js")
  .addEntry("js/ad", "./assets/js/ad.js")
  .addStyleEntry("css/app", "./assets/css/app.scss")

  // enables Sass/SCSS support
  .enableSassLoader();
// uncomment if you're having problems with a jQuery plugin
//.autoProvidejQuery();

// uncomment if you use API Platform Admin (composer req api-admin)
//.enableReactPreset()
//.addEntry('admin', './assets/js/admin.js')

module.exports = Encore.getWebpackConfig();
