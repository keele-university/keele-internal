const vh = require('../../utils/vanilla-helper');

function init(){

    const searchButton = document.querySelector('.js-ki-search-overlay');
    const closeOverlay = document.querySelector('.closebtn');

    const overLay = document.getElementById("myOverlay");
    const searchInput = document.querySelector('.ki-js-modal-search-input');
    // Open the full screen search box 
    function openSearch() {
        // overLay.style.display = "block";
        // overLay.style.opacity = ".95";
        vh.addClass(overLay, 'overlay-active');
        searchInput.focus();
        
    }

    // Close the full screen search box 
    function closeSearch() {
        // overLay.style.display = "none";
        // overLay.style.opacity = "0";
        vh.removeClass(overLay, 'overlay-active');
    }

    searchButton.addEventListener('click', function(e){
        openSearch();
        e.preventDefault();
    });

    closeOverlay.addEventListener('click', function(){
        closeSearch();
        // e.preventDefault();
    });

    document.addEventListener('keyup', function(e) {
        if (e.key === "Escape") { // escape key maps to keycode `27`
            closeSearch();
        }}
    );

    // FORM SUBMIT

    var ele = document.querySelector('#ki-js-main-search-modal-form');
    if(ele.addEventListener){
        ele.addEventListener("submit", callback, false);  //Modern browsers
    }else if(ele.attachEvent){
        ele.attachEvent('onsubmit', callback);            //Old IE
    }

    function callback(e){
        e.preventDefault();

        // get user typed string
        var kQuery = searchInput.value;
        var searchUrl = 'https://www.keele.ac.uk/internal-dev/search/?query='

        var destinationSearch = searchUrl + kQuery;
        // console.log(destinationSearch)
        window.location = destinationSearch;
    }

}


module.exports = {
    init: init
}