
function init (){

    // true or false
    var isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    // console.log(isIE11);

    if ( isIE11 === true ) {

        // cards and media fix
        document.styleSheets[0].addRule('.card','display: inline-block !important;');
        document.styleSheets[0].addRule('.card','min-width: 100% !important;');
        document.styleSheets[0].addRule('.media','display: inline-block !important;');
        
        // overlay input box fix (without the following it is pinned to the bottom)
        document.styleSheets[0].addRule('#ki-js-main-search-modal-form','top: 40%;');
        document.styleSheets[0].addRule('#ki-js-main-search-modal-form','position: fixed;');
        document.styleSheets[0].addRule('#ki-js-main-search-modal-form','left: 35%;');

    }


}

module.exports = {
    init: init
}