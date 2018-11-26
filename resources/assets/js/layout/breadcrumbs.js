function init(){
    var breadHome = document.querySelector('.breadcrumb-item:first-of-type');

    // safety check in case breadcrumbs are ever changed in t4
    if (breadHome !== null ){
        breadHome.innerHTML = '<a href="/internal"><i class="fas fa-home"></i></a>';
    }
}

module.exports = {
    init: init,
}