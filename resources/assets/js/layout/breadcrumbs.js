var vh = require('./../utils/vanilla-helper');

function init(){
    var breadHome = document.querySelector('.breadcrumb-item:first-of-type');

    // safety check in case breadcrumbs are ever changed in t4
    if (breadHome !== null ){
        breadHome.innerHTML = '<a href="/internal"><i class="fas fa-home"></i></a>';
    }

    // hide breadcrumbs if we're on the homepage.
    var homeQuery = window.location.pathname;
    var breadCrumbs = document.querySelector('.breadcrumb');
    if ( homeQuery === '/internal/' ) {
        // Add margin bottom to the header if there's no breadcrumbs beneath it (homepage)
        var header = document.querySelector('header');
        vh.addClass(header, 'mb-4');
    } else {
        // unhide the breadcrumbs
        vh.removeClass(breadCrumbs, 'd-none'); // remove d-none which is in nav obj markup
    }

}

module.exports = {
    init: init,
}