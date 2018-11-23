function init(){
    var breadHome = document.querySelector('.breadcrumb-item:first-of-type a');
    breadHome.innerHTML = '<i class="fas fa-home"></i>';
}

module.exports = {
    init: init,
}