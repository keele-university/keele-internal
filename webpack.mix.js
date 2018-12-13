const { mix } = require('laravel-mix');
// const SvgStore = require('webpack-svgstore-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/assets/js/app.js', 'public/js')
//     .webpackConfig({
//         plugins: [
//             new SvgStore({
//                 svgoOptions: {
//                     plugins: [
//                         { removeTitle: true }
//                     ]
//                 },
//                 prefix: 'icon-'
//             })
//         ]
//     })

    mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    // .sass('resources/assets/sass/pattern.scss', 'public/css')
    .copy('resources/media', 'public/media')
    .copy('mix-manifest.json', 'public/')
    .browserSync({
        // proxy: 'keele.dev'
        proxy: 'https://keele-internal.dev'
    })
    .webpackConfig({
        plugins: [
            new BundleAnalyzerPlugin()
        ]
      });


    