import 'bootstrap';
window._ = require('lodash');
window.Vue = require('vue');

Vue.component('vuetest', require('./components/test-vue/Vue-test.vue'));

// force devtools to load in prod
// Vue.config.debug = true;
Vue.config.devtools = true;

const app = new Vue({
    el: '#page-wrapper'
});