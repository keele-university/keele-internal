import 'bootstrap';
window._ = require('lodash');
window.Vue = require('vue');

// window.$ = require('jquery');
var $ = require('jquery');

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

Vue.component('vuetest', require('./components/test-vue/Vue-test.vue'));

// force devtools to load in prod
// Vue.config.debug = true;
Vue.config.devtools = true;

const app = new Vue({
    el: '#page-wrapper'
});