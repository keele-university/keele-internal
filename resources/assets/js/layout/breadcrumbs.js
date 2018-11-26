var vh = require('./../utils/vanilla-helper');

function init(){
    var breadHome = document.querySelector('.breadcrumb-item:first-of-type');

    // safety check in case breadcrumbs are ever changed in t4
    if (breadHome !== null ){
        breadHome.innerHTML = '<a href="/internal"><i class="fas fa-home"></i></a>';
    }

    // hide breadcrumbs if we're on the homepage.
    var homeQuery = window.location.pathname;
    if ( homeQuery !== '/internal/' ) {
        vh.removeClass(breadHome, 'd-none'); // remove d-none which is in nav obj markup
    }


}

module.exports = {
    init: init,
}