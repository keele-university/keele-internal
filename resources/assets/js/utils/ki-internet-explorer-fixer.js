
function init (){

    // true or false
    var isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    // console.log(isIE11);

    if ( isIE11 === true ) {

        document.styleSheets[0].addRule('.card','display: inline-block !important;');
        document.styleSheets[0].addRule('.card','min-width: 100% !important;');
        document.styleSheets[0].addRule('.media','display: inline-block !important;');

    }


}

module.exports = {
    init: init
}