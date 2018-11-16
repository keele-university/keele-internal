
function init(){

    const searchButton = document.querySelector('.js-ki-search-overlay');
    const closeOverlay = document.querySelector('.closebtn');

    // Open the full screen search box 
    function openSearch() {
        document.getElementById("myOverlay").style.display = "block";
    }

    // Close the full screen search box 
    function closeSearch() {
        document.getElementById("myOverlay").style.display = "none";
    }

    searchButton.addEventListener('click', function(e){
        openSearch();
        e.preventDefault();
    });

    closeOverlay.addEventListener('click', function(e){
        closeSearch();
        // e.preventDefault();
    });
}


module.exports = {
    init: init
}