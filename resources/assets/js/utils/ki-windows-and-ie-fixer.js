
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

    // fix up links on Windows machines as they are not obviously links!
    // the following will add a class to the body. This can then be targeted with CSS
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    else if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    else if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    else if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
    
    console.log('Your OS is: '+OSName);

    if ( OSName === 'Windows' ){
        var bod = document.querySelector('body');
        bod.classList.add('js-is-windows')
    }

}

module.exports = {
    init: init
}