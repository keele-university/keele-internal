window.noZensmooth = true
import 'zenscroll';

import 'bootstrap';
window._ = require('lodash');
window.Vue = require('vue');


// console.log(
//     '%cKeele University%c!%cOoooh ⊙.☉, ... looks as though you may want to speak to the web team\? support\.web\@keele\.\ac\.uk',
//     'color: #008f68; font-weight: bold; font-size: 3rem; text-shadow: 0 0 5px rgba(0,0,0,0.2);',
//     'color: hotpink; font-weight: bold; font-size: 3rem; text-shadow: 0 0 5px rgba(0,0,0,0.2);',
//     'color: yellowgreen; font-weight: bold; font-size: 3rem; text-shadow: 0 0 5px rgba(0,0,0,0.2);'
//     );

const style = [
    'background: #000',
    'color: #fff',
    'padding: 10px 10px',
    'line-height: 35px',
    'font-size: 2rem'
    ].join(';');
const style2 = [
    'background: #000',
    'color: white',
    'padding: 10px 0px',
    'line-height: 35px',
    'font-size: 2rem'
    ].join(';');
const style3 = [
    'background: #000',
    'color: #fff',
    'padding: 10px 20px 10px 0px',
    'line-height: 35px',
    'font-size: 2rem'
    ].join(';');
const styleImg = [
    // 'background-image: url("https://www.keele.ac.uk/media/header/logo.svg")',
    'background-image: url("https://media.giphy.com/media/l0IybQ6l8nfKjxQv6/giphy.gif")',
    'background-size: cover',
    'color: #fff',
    // 'padding: 20px 49px'
    'padding: 50px 50px'
    // 'line-height: 35px'
    ].join(';');
console.log('%c ', styleImg);

console.log('Web Support - web.support@keele.ac.uk');
console.log('Web Developer: Chris Beard - c.d.beard@keele.ac.uk');

console.log('%cCoded with %c🍵 %c& %c🐿️ ?', style, style2, style, style3);
// console.log('%c♥ %c & %c🐿️ ?', style2, style, style3);

// Font awesome see:
// https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers#next and
// https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
// import '../../../node_modules/@fortawesome/fontawesome-free/js/solid.min';
// import '../../../node_modules/@fortawesome/fontawesome-free/js/brands.min';
// import '../../../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min';


// Lazy load library
const lazysizes = require('lazysizes');

// var $ = require('jquery');
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

Vue.component('vuetest', require('./components/test-vue/Vue-test.vue'));

// Vanilla JS imports
const bullets = require('../js/components/ki-bulleted-lists/ki-bulleted-lists');
const navBarUtils = require('./utils/ki-nav-bar-utils');
const sectionHeader = require('./utils/ki-section-header');
const kiNavboxGridAutoChildren = require('./components/ki-navbox-grid-auto-children/ki-navbox-grid-auto-children');
const kiAlert = require('./components/ki-alert/ki-alert');
const kiAZ = require('./components/ki-az/ki-az');
const topButton = require('./utils/ki-scroll-to-top-button');
const newsStory = require('./components/ki-news-story/ki-news-story');
const IEfix = require('./utils/ki-windows-and-ie-fixer');

// Layout and search imports
const breadcrumbs = require('./layout/breadcrumbs');
const footerGlobal = require('./layout/footer/footer-main');
const searchOverlay = require('./layout/search/search-overlay');
const searchMain = require('./layout/search/search-main');
const globTables = require('./layout/tables');

// force devtools to load in prod
// Vue.config.debug = true;
Vue.config.devtools = true;

const app = new Vue({
    el: '#page-wrapper'
});


// Safe INIT
// See https://www.viget.com/articles/extending-paul-irishs-comprehensive-dom-ready-execution/
// and https://www.paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
// for history + explanation. This approach was recommended by our digital agency Absolute agency on the main site.
(function (window, document, undefined) {

    'use strict';

    function DOMReady(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    var KEELE = {
        common: {
            init: function() {
                navBarUtils.init();
                bullets.init();
                sectionHeader.init();
                if ( document.querySelectorAll('.ki-auto-child-sections a') ) {
                    kiNavboxGridAutoChildren.init();
                }
                kiAlert.init();
                kiAZ.init();
                topButton.init();
                if (document.querySelector('.js-ki-search-overlay ')){
                    searchOverlay.init();
                }
                if (document.querySelector('.js-ki-trigger-main-searchmain')){
                    searchMain.init();
                }
                footerGlobal.init();
                breadcrumbs.init();
                newsStory.init();
                globTables.init();
                IEfix.init();
                // shieldbannerfix.init();
                // window.scrollTo(0,0);
            }
        }
    };

    var UTIL = {
        exec: function( controller, action ) {
            var ns = KEELE,
                action = ( action === undefined ) ? "init" : action;

            if ( controller !== "" && ns[controller] && typeof ns[controller][action] == "function" ) {
                ns[controller][action]();
            }
        },

        init: function() {
            var body = document.body,
                controller = body.getAttribute( "data-controller" ),
                action = body.getAttribute( "data-action" );

            UTIL.exec( "common" );
            UTIL.exec( controller );
            UTIL.exec( controller, action );
        }
    };

    DOMReady(function () {

        DOMReady( UTIL.init );

    });

})(window, document);