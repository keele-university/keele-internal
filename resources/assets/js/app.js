import 'bootstrap';
window._ = require('lodash');
window.Vue = require('vue');

// window.$ = require('jquery');
var $ = require('jquery');

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

Vue.component('vuetest', require('./components/test-vue/Vue-test.vue'));


const navBarUtils = require('./utils/ki-nav-bar-utils');

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