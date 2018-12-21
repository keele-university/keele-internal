var vh = require('./../utils/vanilla-helper');

function init(){
    var breadHome = document.querySelector('.breadcrumb-item:first-of-type');

    // safety check in case breadcrumbs are ever changed in t4
    if (breadHome !== null ){
        breadHome.innerHTML = '<a href="/intranet"><i class="fas fa-home"></i></a>';
    }

    // hide breadcrumbs if we're on the homepage.
    var homeQuery = window.location.pathname;
    var breadCrumbs = document.querySelector('.breadcrumb');
    if ( homeQuery !== '/intranet/' ) {
        // unhide the breadcrumbs
        vh.removeClass(breadCrumbs, 'invisible'); // remove invisible which is in nav obj markup
    }

}

module.exports = {
    init: init,
}