/* eslint-disable prettier/prettier */
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 | * Note: please sort by category ascending
 |
 */

/*
 |--------------------------------------------------------------------------
 | Source Maps settings
 |--------------------------------------------------------------------------
 |
 | Set APP_SOURCEMAP variable to true in your .env file
 |
 */
if (
  process.env.APP_SOURCEMAP !== 'undefined' &&
  process.env.APP_SOURCEMAP === 'true'
) {
  mix.sourceMaps(true, 'source-map');
}


mix
  .js('src/video-modal/video-modal.js', 'dist/video-modal.js')

  /** Disable windows notifications  **/
  .disableNotifications();
