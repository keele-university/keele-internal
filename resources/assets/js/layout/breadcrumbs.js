function init(){
    var breadHome = document.querySelector('.breadcrumb-item:first-of-type');
    breadHome.innerHTML = '<a href="/internal"><i class="fas fa-home"></i></a>';
}

module.exports = {
    init: init,
}