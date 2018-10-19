var browserSync = require('browser-sync');

// npm run t4kproxy will build with uncompressed 'dev' and then run the below
// which will proxy with hotload the live site through localhost but substitute app.js + app.css
// with the dev built files under public

browserSync({
    proxy: 'https://webstage.keele.ac.uk',
    files: ['public/**'],
    serveStatic: ['public'],
    rewriteRules: [
        {
            match: new RegExp('k-core/intra/css/app.css'),
            fn: function() {
                return 'css/app.css';
            }
        },
        {
            match: new RegExp('k-core/intra/js/app.js'),
            fn: function() {
                return 'js/app.js';
            }
        }
    ]
});