import 'bootstrap';
window._ = require('lodash');
window.Vue = require('vue');

// Font awesome see:
// https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers#next and
// https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
import '../../../node_modules/@fortawesome/fontawesome-free/js/solid.min';
import '../../../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min';
// import '../../../node_modules/@fortawesome/fontawesome-free/js/brand.min';


// window.$ = require('jquery');
var $ = require('jquery');

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

Vue.component('vuetest', require('./components/test-vue/Vue-test.vue'));

// Vanilla JS imports
const col3bullets = require('../js/components/ki-col-3-bulleted-lists/ki-col-3-bulleted-lists');
const navBarUtils = require('./utils/ki-nav-bar-utils');
const sectionHeader = require('./utils/ki-section-header');

// force devtools to load in prod
// Vue.config.debug = true;
Vue.config.devtools = true;

const app = new Vue({
    el: '#page-wrapper'
});




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
                col3bullets.init();
                sectionHeader.init();
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